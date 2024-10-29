import { useForm } from 'react-hook-form';

export default function FormPreferencias() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="flex flex-col items-center gap-8 p-8 bg-slate-600 rounded-lg shadow-md h-[606px]">
			<h3 className="text-4xl font-bold mb-4">Preferencias:</h3>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-md">
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Tipo de entrenamiento:</label>
					<input
						type="text"
						{...register('trainingType', { required: true, maxLength: 50 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.trainingType?.type === 'required' && (
						<span className="text-red-500 text-sm mt-1">El tipo de entrenamiento es obligatorio</span>
					)}
					{errors.trainingType?.type === 'maxLength' && (
						<span className="text-red-500 text-sm mt-1">Se ha excedido la longitud máxima</span>
					)}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Objetivos:</label>
					<input
						type="text"
						{...register('goals', { required: true, maxLength: 100 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.goals?.type === 'required' && <span className="text-red-500 text-sm mt-1">Los objetivos son obligatorios</span>}
					{errors.goals?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">Se ha excedido la longitud máxima</span>}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Disponibilidad:</label>
					<input
						type="text"
						{...register('availability', { required: true, maxLength: 50 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.availability?.type === 'required' && <span className="text-red-500 text-sm mt-1">La disponibilidad es obligatoria</span>}
					{errors.availability?.type === 'maxLength' && (
						<span className="text-red-500 text-sm mt-1">Se ha excedido la longitud máxima</span>
					)}
				</div>
				<input
					type="submit"
					value="Save"
					className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-300 cursor-pointer"
				/>
			</form>
		</div>
	);
}
