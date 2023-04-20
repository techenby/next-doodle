import { Blog } from "@/components/Blog";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import GraphQL from "@/graphql";


export async function getStaticProps() {
  const data = await GraphQL.query(`
    {
      landing_page: exp_channel_entries(
        channel: "landing_page"
      ) {
        data {
          entry_id
          title
          heading
          subheading
          sections {
            id
            heading, 
            entry_limit
          }
        }
      }
      blog: exp_channel_entries(
        channel: "blog"
        limit: 3
      ) {
        data {
          entry_id
          title
          description
          entry_date
          categories {
            cat_name
          }
          author {
            screen_name
          }
        }
      }
      features: exp_channel_entries(
        channel: "features"
      ) {
        data {
          entry_id
          title
          description
        }
      }
      testimonials: exp_channel_entries(
        channel: "testimonial"
      ) {
        data {
          entry_id
          title
          quote
          position
        }
      }
      faq: exp_channel_entries(
        channel: "faq"
      ) {
        data {
          entry_id
          title
          description
        }
      }
    }
    `);

  return {
    props: {
      entry: data.landing_page.data[0],
      posts: data.blog.data,
      features: data.features.data,
      testimonials: data.testimonials.data,
      faq: data.faq.data,
    },
  };
}

export default function Home({ entry, features, posts, testimonials, faq }) {
  return (
    <main>
      <Hero heading={entry.heading} subheading={entry.subheading} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Blog posts={posts} />
      <Faq faq={faq} />
    </main>
  )
}
