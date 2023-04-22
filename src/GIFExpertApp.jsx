import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const apiKey = "KRXZwRqjj4Rilwp7O9rhbiDqurriJaen";

export const GIFExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div>GIFExpertApp</div>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
