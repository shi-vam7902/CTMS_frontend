export const addProject = async (formData) => {
  try {
    const response = await fetch("/server/projects/project/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("addProject data:", data);

    if (!response.ok) {
      const errorMessage =
        data.errors && data.errors.length > 0
          ? data.errors.join(", ")
          : data.message;
      throw new Error(errorMessage || "Post Creation failed.");
    }

    return data;
  } catch (error) {
    throw new Error(
      error.message || "Post Creation failed. Please try again later."
    );
  }
};

export const getAllProject = async () => {
  try {
    const response = await fetch("/server/projects/project", {
      method: "GET",
    });

    const data = await response.json();
    console.log("projectApi data", data);

    if (!response.ok) {
      const errorMessage =
        data.errors && data.errors.length > 0
          ? data.errors.join(", ")
          : data.message;
      throw new Error(errorMessage || "Get Project failed.");
    }

    return { data };
  } catch (error) {
    throw new Error(
      error.message || "Get Project failed. Please try again later."
    );
  }
};

export const getPosts = async (newFilter) => {
  let queryString = "";

  for (let key in newFilter) {
    if (Array.isArray(newFilter[key])) {
      newFilter[key].forEach((value) => {
        queryString += `${key}=${value}&`;
      });
    } else {
      queryString += `${key}=${newFilter[key]}&`;
    }
  }

  console.log("queryString: " + queryString);
  try {
    const response = await fetch(`/server/posts?${queryString}`, {
      method: "GET",
    });

    const data = await response.json();
    // console.log("postApi getpost data: ", data);

    if (!response.ok) {
      const errorMessage =
        data.errors && data.errors.length > 0
          ? data.errors.join(", ")
          : data.message;
      throw new Error(errorMessage || "Post fetch failed.");
    }

    return data;
  } catch (error) {
    throw new Error(
      error.message || "Post fetch failed. Please try again later."
    );
  }
};

export const addTasks = async (formData) => {
  try {
    const response = await fetch("/server/tasks/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage =
        data.errors && data.errors.length > 0
          ? data.errors.join(", ")
          : data.message;
      throw new Error(errorMessage || "Add Task failed.");
    }

    return data;
  } catch (error) {
    throw new Error(
      error.message || "Add Task failed. Please try again later."
    );
  }
};
