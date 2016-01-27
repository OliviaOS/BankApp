var Admin={};

Admin.UserModel=function UserModel(customerId,username,password)
{
	this.customerId=customerId;
	this.username=username;
	this.password=password;
}
Admin.CustomerInfoModel = function CustomerInfoModel(customerId,firstname,lastname,email,gender,mobile)
{
	this.customerId=customerId;
	this.firstname=firstname;
	this.lastname=lastname;
	this.email=email;
	this.gender=gender;
	this.mobile=mobile;
}
Admin.CheckingAccountModel=function CheckingAccountModel(customerId,checkingNum,checkingBalance)
{
	this.customerId=customerId;
	this.checkingNum=checkingNum;
	this.checkingBalance=checkingBalance;
}
Admin.SavingAccountModel=function SavingAccountModel(customerId,savingNum,savingBalance)
{
	this.customerId=customerId;
	this.savingNum=savingNum;
	this.savingBalance=savingBalance;
}

Admin.CustomerRepository = function CustomerRepository()
{
	var userData=[];
	var customerInfoData=[];
	var checkingAccountData=[];
	var savingAccountData=[];

	/*function init(){		
		var user1=new Admin.UserModel(customerId:1,username:"Kiku",password:"kiku");
		userData.push(user0);
		userData.push(user1);
		var cutomer1=new Admin.CustomerInfoModel(customerId:1,firstname:"Kiku",lastname:"Honda",email:"kiku@yahoo.co.jp",gender:1,mobile:3333333333);
		customerInfoData.push(customer1);
	}
	init();*/

	//create customer customer default credentials
	this.createUser=function(user){
		userData.push(user);
		localStorage["users"]=JSON.stringify(userData);
	}
	//edit admin own password---------------???------------------
	this.editUser=function(user){
		if(user.customerId==000){userData.splice(0,1,user);}
	}

	this.addCustomerInfo=function(customer){
		customerInfoData.push(customer);
		localStorage["customerInfo"]=JSON.stringify(customerInfoData);
	}

	this.viewAllCustomer=function(){
		if(localStorage["customerInfo"]!= null||localStorage["customerInfo"]!=undefined){
			customerInfoData=JSON.parse(localStorage["customerInfo"]);
			return customerInfoData;
		}else{
			return null;
		}
	}

	this.getCustomerById=function(customerId){
		for(var i=0;i<customerInfoData.length;i++){
			if(customerInfoData[i].customerId==customerId){return customerInfoData[i];}
		}
	}	
	this.createCheckingAccount=function(checkingAccount){
		checkingAccountData.push(checkingAccount);
		localStorage["checkingAccounts"]=JSON.stringify(checkingAccountData);
	}
	this.createSavingAccount=function(savingAccount){
		savingAccountData.push(savingAccount);
		localStorage["savingAccounts"]=JSON.stringify(savingAccountData);
	}
}
