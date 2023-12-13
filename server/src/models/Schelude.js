
// Crear películas
Movie.create({ title: 'Casas de Terror', description: 'Descripción de Casas de Terror', /*...otros campos...*/ });
Movie.create({ title: 'La venida del hombre', description: 'Descripción de La venida del hombre', /*...otros campos...*/ });
Movie.create({ title: 'El destructor de mundos', description: 'Descripción de El destructor de mundos', /*...otros campos...*/ });
Movie.create({ title: 'Godzilla vs Kong', description: 'Descripción de Godzilla vs Kong', /*...otros campos...*/ });

// Crear salas
Sala.create({ name: 'Sala 1', /*...otros campos...*/ });
Sala.create({ name: 'Sala 2', /*...otros campos...*/ });
Sala.create({ name: 'Sala 3', /*...otros campos...*/ });
Sala.create({ name: 'Sala 4', /*...otros campos...*/ });

// Crear horarios para las películas y las salas
Horario.create({ hora: '09:00' }); // Sala 1 - Casas de Terror
Horario.create({ hora: '12:00' }); // Sala 2 - Casas de Terror
Horario.create({ hora: '15:00' }); // Sala 3 - Casas de Terror
Horario.create({ hora: '18:00' }); // Sala 4 - Casas de Terror

Horario.create({ hora: '10:00' }); // Sala 1 - La venida del hombre
Horario.create({ hora: '13:00' }); // Sala 2 - La venida del hombre
Horario.create({ hora: '16:00' }); // Sala 3 - La venida del hombre
Horario.create({ hora: '19:00' }); // Sala 4 - La venida del hombre

Horario.create({ hora: '11:00' }); // Sala 1 - El destructor de mundos
Horario.create({ hora: '14:00' }); // Sala 2 - El destructor de mundos
Horario.create({ hora: '17:00' }); // Sala 3 - El destructor de mundos
Horario.create({ hora: '20:00' }); // Sala 4 - El destructor de mundos

Horario.create({ hora: '08:00' }); // Sala 1 - Godzilla vs Kong
Horario.create({ hora: '11:30' }); // Sala 2 - Godzilla vs Kong
Horario.create({ hora: '14:30' }); // Sala 3 - Godzilla vs Kong
Horario.create({ hora: '18:30' }); // Sala 4 - Godzilla vs Kong
