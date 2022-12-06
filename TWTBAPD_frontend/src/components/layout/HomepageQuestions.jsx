import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionsCategory from "../UI/QuestionsCategory";

const HomepageQuestions = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      await axios
        .get("http://127.0.0.1:8000/api/v1/get-all-categories/")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAllCategories();
  }, []);

  return (
    <div className="content">
      {categories.map((category) => {
        return (
          <QuestionsCategory
            title={category.name}
            subtitle={category.description}
            questions={["h1", "h2"]}
            key={category.id}
          />
        );
      })}
    </div>
  );
};

export default HomepageQuestions;
