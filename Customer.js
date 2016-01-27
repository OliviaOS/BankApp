var Customer={};

Customer.TransactionModel=function TransactionModel(transId,transAmount,transDirection,transTime){}

Customer.CustomerRepository=function CustomerRepository()
{
	var userData=[];
	var customerInfoData=[];
	var checkingAccountData=[];
	var savingAccountData=[];
	var transactionData=[];

	//change password
	this.resetPassword=function(user)
	{
		if(localStorage["users"]!=null||localStorage["users"]!=undefined){
			userData=JSON.parse(localStorage["users"]);
			for(var i=0;i<userData.length;i++){
				if(userData[i].customerId==user.customerId){
					userData.splice(i,1,user);
					localStorage["users"]=JSON.stringify(userData);
					alert("Password Changed Successfully");
					document.location="CustomerHome.html"
				}else{
					alert("Your user credential is not available! Please contact staff!");
					document.location="CustomerHome.html";
				}
			}//for
		}else{
			alert("Your user credential is not available! Please contact staff!");
			document.location="CustomerHome.html";
		}
	}

	//edit personal information
	this.editInfo=function(customer)
	{
		if(localStorage["customerInfo"]!= null||localStorage["customerInfo"]!=undefined){
			customerInfoData=JSON.parse(localStorage["customerInfo"]);
			for(var i=0;i<customerInfoData.length;i++){
				if(customerInfoData[i].customerId==customer.customerId){
					customerInfoData.splice(i,1,customer);
					localStorage["customerInfo"]=JSON.stringify(customerInfoData);
					alert("Information Update Successfully!");
					document.location="CustomerViewInfo.html";
				}else{
					alert("Your Information Profile is not available! Please contact staff!");
					document.location="CustomerHome.html";
				}
			}//for
		}else{
			alert("Your Information Profile is not available! Please contact staff!");
			document.location="CustomerHome.html";
		}
	}

	//check saving account
	this.getSaving=function(customerId)
	{
		if(localStorage["savingAccounts"]!=null||localStorage["savingAccounts"]!=undefined){
			savingAccountData=JSON.parse(localStorage["savingAccounts"]);
			for(var i=0;i<savingAccountData.length;i++){
				if(savingAccountData[i].customerId==customerId){
					return savingAccountData[i];
				}else{
					alert("Your Saving Account is not available! Please contact staff!");
				}
			}//for
		}else{
			alert("Your Saving Account is not available! Please contact staff!");
		}
	}

	//check checking account
	this.getChecking=function(customerId)
	{
		if(localStorage["checkingAccounts"]!=null||localStorage["checkingAccounts"]!=undefined){
			checkingAccountData=JSON.parse(localStorage["checkingAccounts"]);
			for(var i=0;i<checkingAccountData.length;i++){
				if(checkingAccountData[i].customerId==customerId){
					return checkingAccountData[i];
				}else{
					alert("Your Checking Account is not available! Please contact staff!");
				}
			}//for
		}else{
			alert("Your Checking Account is not available! Please contact staff!");
		}
	}

	//transfer between saving and checking account
	this.insideTransfer=function(amount){}


}