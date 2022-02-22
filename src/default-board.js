import { uuid } from "./utils";

export default {
  name: "workshop",
  columns: [
    {
      name: "todo",
      tasks: [
        {
          description: "description of first task",
          name: "first task",
          id: uuid(),
          userAssigned: null,
        },
        {
          description: "description of second task",
          name: "second task",
          id: uuid(),
          userAssigned: null,
        },
        {
          description: "description of third task",
          name: "and third",
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: "in-progress",
      tasks: [
        {
          description: "description of first task of in-progress tasks",
          name: "first task",
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: "done",
      tasks: [
        {
          description: "description of first task of done tasks",
          name: "first task",
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
  ],
};
