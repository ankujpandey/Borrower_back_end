// class EMI_calculator {
// 	async emiCalc(data) {
// 		console.log("service called");
// 		let createUserData = {};
// 		try {
// 			const result = await this.usersRepository.createUser(data);
// 			const token = JWTToken.createToken({
// 				email: result.email,
// 				uid: result.uid,
// 			});

// 			createUserData.result = result;
// 			createUserData.auth = token;

// 			return createUserData;
// 		} catch (error) {
// 			console.log("Something went wrong in userInfo services".magenta);
// 			throw { error };
// 		}
// 	}
// }
