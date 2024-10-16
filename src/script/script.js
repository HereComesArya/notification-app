import * as signalR from "@microsoft/signalr";

export default {
  data() {
    return {
      notifications: [],
      unreadNotifications: [],
    };
  },
  methods: {
    addNotification(message) {
      this.notifications.push(message);
      this.unreadNotifications.push(message);
    },
  },
  mounted() {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:7110/notificationHub")
      .build();

    connection
      .start()
      .then(() => {
        console.log("SignalR connected.");
        connection.on("ReceiveNotification", (message) => {
          this.addNotification(message);
        });
      })
      .catch((err) => console.error("Error while starting SignalR connection:", err));
  },
};