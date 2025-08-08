import Header from "components/Header"

const AllUsers = () => {

  const user = { name: "Thierry Dohouin" };

  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Hello ${user?.name ?? 'Guest'}. Status of all users`}
        description="Here you can find All users on yours application"
      />

      <p className="text-gray-400">
        All Users Page Content.
      </p>
    </main>
  )
}

export default AllUsers
