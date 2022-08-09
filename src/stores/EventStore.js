import { defineStore } from 'pinia';
import EventService from '../services/EventService';

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      event: {},
      events: [],
    };
  },
  getters: {
    eventCount() {
      return this.events.length;
    },
  },
  actions: {
    fetchEvents() {
      return EventService.getEvents()
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchEvent(id) {
      return EventService.getEvent(id)
        .then((response) => {
          this.event = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
    createEvent(event) {
      return EventService.postEvent(event)
        .then(() => {
          this.event = event;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
