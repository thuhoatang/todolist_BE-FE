import httpRequest from "../until/httpRequest";

export const toDoListService = {
  fetchData: async () => {
    const res = await httpRequest.get("tasks").catch(function (err) {
      console.log(err);
    });

    return res.data;
  },
  create: async (term) => {
    const res = await httpRequest
      .post("tasks", { title: term })
      .catch(function (err) {
        console.log(err);
      });
    return res.data;
  },
  delete: async (id) => {
    const res = await httpRequest.delete(`tasks/${id}`).catch(function (err) {
      console.log(err);
    });
    return res.status;
  },
  update: async (id, term) => {
    const res = await httpRequest
      .patch(`tasks/${id}`, { title: term })
      .catch(function (err) {
        console.log(err);
      });
    return res.data;
  },
};
