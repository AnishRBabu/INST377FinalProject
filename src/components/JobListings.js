import React, { useState, useEffect } from "react";
import Job from "./Job";
import CategoryDropdown from "./CategoryDropdown";
import SearchBar from "./SearchBar"; // Make sure to create this component
import Fuse from "fuse.js"; // Import Fuse.js

function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(
          "https://www.arbeitnow.com/api/job-board-api"
        );
        const jsonData = await response.json();
        setJobs(jsonData.data);

        const fetchedCategories = new Set(
          jsonData.data.flatMap((job) => job.tags)
        );
        setCategories([...fetchedCategories]);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    fetchJobs();
  }, []);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Configure Fuse.js for fuzzy searching
  const fuse = new Fuse(jobs, {
    keys: ["title", "description", "company_name", "tags"],
    threshold: 0.2, // Adjust the threshold for fuzziness
  });

  // Perform fuzzy search only when searchTerm is not empty
  const searchResults = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : jobs;

  const filteredJobs = selectedCategory
    ? searchResults.filter((job) => job.tags.includes(selectedCategory))
    : searchResults;

  return (
    <div className="job-listings-layout">
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {isSidebarVisible ? "Hide Filters" : "Show Filters"}
      </button>

      <div className={`sidebar ${isSidebarVisible ? "sidebar-visible" : ""}`}>
        <SearchBar onSearch={handleSearch} />
        <CategoryDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <div className="job-listings-full-width-container">
        {filteredJobs.map((job) => (
          <Job
            key={job.slug}
            title={job.title}
            description={job.description}
            company={job.company_name}
            location={job.location}
            jobType={job.job_types.join(", ")}
            tags={job.tags}
            applyLink={job.url}
          />
        ))}
      </div>
    </div>
  );
}

export default JobListings;
