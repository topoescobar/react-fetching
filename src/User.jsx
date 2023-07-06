export default function User({ user }) {
  return (
    <div>
      <p>
        {" "}
        Nombre: {user.name}, Email: {user.email}, Compañia: {user.company.name}{" "}
      </p>
    </div>
  );
}
