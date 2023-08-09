import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Mail from 'react-native-mail';

const EmailForm = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const sendEmail = () => {
    Mail.composeAsync({
      recipients: [recipient],
      subject: subject,
      body: body,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Recipient's Email"
        onChangeText={text => setRecipient(text)}
        value={recipient}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Subject"
        onChangeText={text => setSubject(text)}
        value={subject}
      />
      <TextInput
        style={{ width: '80%', height: 80, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Body"
        onChangeText={text => setBody(text)}
        value={body}
        multiline
      />
      <Button title="Send Email" onPress={sendEmail} />
    </View>
  );
};

export default EmailForm;
