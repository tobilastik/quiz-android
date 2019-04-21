import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView, Linking } from "react-native";
import { Icon } from "native-base";
export default class PrivacyScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ backgroundColor: "#EFEFF4", flex: 1 }} />
        <View style={{ padding: 20, alignItems: "center" }}>
          <ScrollView>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                alignContent: "center",
                alignItems: "center",
                paddingBottom: 10
              }}
            >
              Privacy Statement
            </Text>
            <Text>
              We built the Jcole Quotes and Lyrics Game app as an Ad Supported
              app. This page is used to inform visitors regarding our policies
              with the collection, use, and disclosure of Personal Information
              if anyone decided to use our Service. If you choose to use our
              Service, then you agree to the collection and use of information
              in relation to this policy. The Personal Information that we
              collect is used for providing and improving the Service. We will
              not use or share your information with anyone except as described
              in this Privacy Policy.
            </Text>
            <Text />
            <Text style={{ fontWeight: "bold" }}>Security </Text>
            <Text>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </Text>
            <Text />
            <Text style={{ fontWeight: "bold" }}>Log Data </Text>
            <Text>
              {" "}
              We want to inform you that whenever you use our Service, in a case
              of an error in the app, we collect data and information (through
              third party products) on your phone, called Log Data. This Log
              Data may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing our Service, the time and
              date of your use of the Service, and other statistics.
            </Text>
            <Text />
            <Text style={{ fontWeight: "bold" }}>Cookies</Text>
            <Text>
              {" "}
              Cookies Cookies are files with a small amount of data that are
              commonly used as anonymous unique identifiers. These are sent to
              your browser from the websites that you visit and are stored on
              your device's internal memory. This Service does not use these
              “cookies” explicitly. However, the app may use third party code
              and libraries that use “cookies” to collect information and
              improve their services. You have the option to either accept or
              refuse these cookies and know when a cookie is being sent to your
              device. If you choose to refuse our cookies, you may not be able
              to use some portions of this Service.
            </Text>
            <Text />
            <Text style={{ fontWeight: "bold" }}>Service Providers</Text>
            <Text>
              {`We may employ third-party companies and individuals due to the following reasons: \n
							
• To facilitate our Service;
							
• To provide the Service on our behalf;
							
• To perform Service-related services; or
							
• To assist us in analyzing how our Service is used.`}
            </Text>
            <Text />
            <Text>
              We want to inform users of this Service that these third parties
              have access to your Personal Information. The reason is to perform
              the tasks assigned to them on our behalf. However, they are
              obligated not to disclose or use the information for any other
              purpose.
            </Text>

            <Text />
            <Text style={{ fontWeight: "bold" }}>
              Changes to This Privacy Policy{" "}
            </Text>

            <Text>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page. These changes are effective immediately after they are
              posted on this page.
            </Text>

            <Text />
            <Text style={{ fontWeight: "bold" }}>Contact Us </Text>

            <Text>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us.
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
