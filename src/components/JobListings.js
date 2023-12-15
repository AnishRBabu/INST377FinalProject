import React, { useState, useEffect } from "react";
import Job from "./Job";
import CategoryDropdown from "./CategoryDropdown";
import SearchBar from "./SearchBar"; // Make sure to create this component

function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.tags.includes(selectedCategory))
    : jobs;

  return (
    <div className="job-listings-layout">
      {/* Toggle button for the filter tray */}
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {isSidebarVisible ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filter tray sidebar */}
      <div className={`sidebar ${isSidebarVisible ? "sidebar-visible" : ""}`}>
        {/* Search bar moved inside the sidebar */}
        <SearchBar />
        <CategoryDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        {/* Additional filters can be added here */}
      </div>

      {/* Job listings container adjusted for full width */}
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
