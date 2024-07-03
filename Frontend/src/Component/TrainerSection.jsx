import './TrainerSection.css';

const trainers = [
  { name: 'Jean Smith', role: 'Marketing Instructor', image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: 'Jeremy Lawson', role: 'PHP Instructor', image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: 'Jean Smith', role: 'Marketing Instructor', image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGluJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D" },
  { name: 'Jean Andrews', role: 'Instructor', image: "https://plus.unsplash.com/premium_photo-1670884522719-d7f4bcdfcbeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHx3b21hbiUyMGluJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D" },
];

const TrainerSection = () => {
  return (
    <section className="trainers-section">
      <h2>Meet Our Trainers</h2>
      <p>Suspindisse ante mi iaculis ac eleifend id venenatis non eros. Sed rhoncus gravida eli eu sollicitudin sem iaculis.</p>
      <div className="trainers">
        {trainers.map((trainer, index) => (
          <div className="trainer" key={index}>
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainerSection;
