import { FC, useEffect, useState } from "react";
import { Card, Menu } from "./components";
import { Course } from "./types/course.type";
import "./styles/app.scss";

const App: FC = () => {
  const allTagsTitle = "Все темы";

  const [activeTag, setActiveTag] = useState(allTagsTitle);
  const [initialData, setInitialData] = useState<Course[]>([]);

  const url = "https://logiclike.com/docs/courses.json";
  const tagList = [allTagsTitle, ...new Set(initialData.map(({ tags }) => tags).flat())];
  const filteredTagList = activeTag === allTagsTitle ? initialData : initialData.filter(({ tags }) => tags.includes(activeTag));

  const onTagClick = (tag: string) => {
    setActiveTag(tag);
  };

  const fetchData = async () => {
    const response = await (await fetch(url)).json();
    setInitialData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Menu activeTag={activeTag} tagList={tagList} onTagClick={onTagClick} />
      <div className="app__content">
        {filteredTagList.map(({ id, bgColor, image, name }) => (
          <Card key={id} bgColor={bgColor} image={image} name={name} />
        ))}
      </div>
    </div>
  );
};

export default App;
