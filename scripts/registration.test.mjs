import test from 'node:test';
import assert from 'node:assert/strict';
import {registrationEmail} from '../registration.mjs';
test('Personal details and contribution survive mailto encoding',()=>{
 const url=new URL(registrationEmail('  João & Ana + Silva  ', '+44 (7700) 900123'));
 assert.equal(url.pathname,'abundantevidalondon@gmail.com');
 assert.equal(url.searchParams.get('subject'),'Inscrição — CONFERÊNCIA ABV 2026');
 const body=url.searchParams.get('body');
 assert.ok(body.includes('Nome Completo: João & Ana + Silva'));
 assert.ok(body.includes('Telefone/WhatsApp: +44 (7700) 900123'));
 assert.ok(body.includes('£5 por participante'));
 assert.ok(body.includes('orientações de pagamento'));
});
test('Rejects unusable contact details',()=>{
 for(const [name,phone] of [['  ','+447700900123'],['Ana','abc'],['Ana','123'],['Ana','1234567890123456']]) assert.throws(()=>registrationEmail(name,phone));
});
