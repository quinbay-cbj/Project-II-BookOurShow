import { adduserlist } from "@/service/RegisterComponentService";
import CheckPassword from '@/mixins/Register.mixins'
export default {
  name: "RegisterComponent",
  data() {
    return {
      compflag:false,
      errorflag: false,
      successflag: false,
      passworderrorflag: false,
      nameerrorflag: false,
      phoneerrorflag: false,
      confirmflag: false,
      errormessage:'',
      // passwordsuccessflag:false,
      user: {
        name: "",
        password: "",
        confirmpassword: "",
        phoneNumber: "",
      },
    };
  },
  mixins:[CheckPassword],
  computed: {
    confirming() {
      return ((this.user.password) == (this.user.confirmpassword) ? true : false)
    }
  },
  methods: {
    registerUser() {
      this.logintrueflag=false;
      this.errorflag = false;
      
      if (this.user.name == "" || this.user.password == "" || this.user.phoneNumber == "" || this.user.confirmpassword == "") {
        this.errorflag = true;
      }
      else {
        this.errorflag = false;
        if (!this.CheckFirstLetterSpecial(this.user.name) || this.user.name.length < 3) {
          this.nameerrorflag = true;
          this.errorflag = true;
        }
        else {
          this.nameerrorflag = false;
        }
        if (!this.phonenumber(this.user.phoneNumber) || this.user.phoneNumber < 0 || this.user.phoneNumber.length != 10) {
          this.phoneerrorflag = true;
          this.errorflag = true;
        }
        else {
          this.phoneerrorflag = false;
        }
        if ((!this.CheckPassword(this.user.password))) { 
          this.passworderrorflag=true;
          this.errorflag=true;
        }
        else {
          this.passworderrorflag=false;
         }
        if (!this.confirming) {
          this.confirmflag = true;
          this.errorflag = true;
        }
        else {
          this.confirmflag = false;
        }
        if (this.errorflag == false) {
          console.log(this.user);
          adduserlist({
            success: (data) => {
              if (data.data == "Succesfully Register") {
                this.errormessage=data.data;
                this.$router.push({ path: "/login" });
              } else {
                this.errorflag = true;
                this.errormessage=data.data;
              }
              console.log(this.errormessage)
              // success(this.errormessage)
            },
            error: (err) => {
              this.errormessage="Please check the details"
              console.log("NOT VAILD")
              this.errormessage=err.response.data.message;
              
              console.log(err.response.data.message);
              // error(this.errormessage)
              // alert(err.data);
            },
            payload: this.user,
          });
        } else {
          this.errorflag = true;
        }
      }
    },
    reset() {
      this.errorflag = false;
      this.successflag = false;
      this.passworderrorflag = false;
      (this.nameerrorflag = false), (this.phoneerrorflag = false);
      for (let field in this.user) {
        this.user[field] = null;
      }
    },
    
    phonenumber(inputtxt) {
      // var phoneno = /^\d{10}$/;
      var phoneno = /^[1-9]{1}[0-9]{9}/;
      return phoneno.test(inputtxt);
    },
    CheckFirstLetterSpecial(inputtxt) {
      var regex = /^[A-Za-z0-9 ]+$/;
      // console.log(regex.test(inputtxt))
      return regex.test(inputtxt);
    },
  },
};
// console.log("password ", this.CheckPassword(this.user.password));
//       console.log("phonenumber ", this.phonenumber(this.user.phoneNumber));
//       console.log("specialchar ", this.CheckFirstLetterSpecial(this.user.name));
//       console.log("this.confirming ", this.confirming);
//       console.log("ength ", this.user.name.length < 3)
//       console.log("condition 1  ",
//         this.phonenumber(this.user.phoneNumber) &&
//         this.user.phoneNumber.length == 10
//       );
//       console.log("condition 2  ",
//         this.CheckFirstLetterSpecial(this.user.name) &&
//         this.user.name.length < 3
//       );
//       console.log("cond in cond ", this.user.name.length)