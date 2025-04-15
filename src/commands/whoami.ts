import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export default async function whoami() {
  const token = process.env.CAL_API_TOKEN;
  if (!token) return console.log("❌ Not logged in. Run `cal-cli login`");

  try {
    const response = await axios.post("https://api.cal.com/graphql", {
      query: `
        query {
          me {
            username
            email
          }
        }
      `,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    console.log("👤 User:", response.data.data.me);
  } catch (err) {
    console.error("❌ API error", err);
  }
}
