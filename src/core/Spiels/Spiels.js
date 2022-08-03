import React from 'react'
import {appRouter} from '../../routes/router'

class Spiels {
    fields = [
        {
            field_id : 1,
            field_name : 'customer_registration',
            priceSettings : {
                max : 250000,
                min : 25000
            },
            fieldSettings : {
                personalInformationObj : {
                    firstname : '',
                    lastname : '',
                    contactnum : '',
                    address : ''
                },
                projectDetailsObj : {
                    projectName : '',
                    projectCategory : '',
                    projectType : '',
                    projectPricing : 25000
                },
                errorProvider : {
                    error_firstname : false,
                    error_lastname : false,
                    error_contactnum : false,
                    error_address : false,
                    error_projectname : false,
                    error_projectCategory : false,
                    error_projectType : false
                },
                error_provider_message : {
                    epm_firstname : '',
                    epm_lastname : '',
                    epm_contactnum : '',
                    epm_address : '',
                    epm_projectname : '',
                    epm_projectcategory : '',
                    epm_projecttype: ''
                }
            }
        },
        {
            field_id : 2,
            field_name : 'user_login',
            fieldSettings : {
                userLoginObj : {
                    email : '',
                    password : ''
                },
                message : '',
                router : {
                    // login : appRouter.devPlatform.path,
                    // Customer : appRouter.Customer.path,
                    Home : appRouter.Homepage.path
                },
                errorProvider : {
                    error_email : false,
                    error_password : false
                },
                error_provider_message : {
                    epm_email : '',
                    epm_password : ''
                }
            }
        }
    ]
}

export default new Spiels()