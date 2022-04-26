export default {
    name: "comment",
    type: "document",
    title: "comment",
    fields: [
        { name: "name", type: "string" },
        {
            title: "Approved",
            name: "approved",
            type: "boolean",
            description: "Comments will not be displayed unless approved by an admin",
        },
        { name: "email", type: "string" },
        { name: "comment", type: "text" },
        { name: "post", type: "reference", to: [{ type: "post" }] },
    ],
};