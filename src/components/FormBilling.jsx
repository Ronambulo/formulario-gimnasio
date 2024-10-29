import { useForm } from 'react-hook-form';

export default function FormBilling({ updateData }) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		updateData('billing', data);
	};

	return (
		<div className="flex flex-col items-center gap-4 p-8 bg-slate-600 rounded-lg shadow-md h-[606px]">
			<h3 className="text-4xl font-bold mb-4">Datos de Pago:</h3>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 w-full max-w-md">
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Método de Pago:</label>
					<select
						{...register('paymentMethod', { required: true })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					>
						<option disabled selected value="">
							Seleccione un método de pago
						</option>
						<option value="creditCard">Tarjeta de Crédito</option>
						<option value="debitCard">Tarjeta de Débito</option>
					</select>
					{errors.paymentMethod && <span className="text-red-500 text-sm mt-1">El método de pago es obligatorio</span>}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Número de Tarjeta:</label>
					<input
						type="text"
						{...register('cardNumber', { required: true, maxLength: 16, minLength: 16 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.cardNumber?.type === 'required' && <span className="text-red-500 text-sm mt-1">El número de tarjeta es obligatorio</span>}
					{errors.cardNumber?.type === 'maxLength' && (
						<span className="text-red-500 text-sm mt-1">El número de tarjeta debe tener 16 dígitos</span>
					)}
					{errors.cardNumber?.type === 'minLength' && (
						<span className="text-red-500 text-sm mt-1">El número de tarjeta debe tener 16 dígitos</span>
					)}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Fecha de Expiración:</label>
					<input
						type="text"
						{...register('expiryDate', { required: true, pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/ })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
						placeholder="MM/YY"
					/>
					{errors.expiryDate?.type === 'required' && (
						<span className="text-red-500 text-sm mt-1">La fecha de expiración es obligatoria</span>
					)}
					{errors.expiryDate?.type === 'pattern' && <span className="text-red-500 text-sm mt-1">Formato de fecha inválido</span>}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Código CVV:</label>
					<input
						type="text"
						{...register('cvv', { required: true, maxLength: 3, minLength: 3 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.cvv?.type === 'required' && <span className="text-red-500 text-sm mt-1">El código CVV es obligatorio</span>}
					{errors.cvv?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">El código CVV debe tener 3 dígitos</span>}
					{errors.cvv?.type === 'minLength' && <span className="text-red-500 text-sm mt-1">El código CVV debe tener 3 dígitos</span>}
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
