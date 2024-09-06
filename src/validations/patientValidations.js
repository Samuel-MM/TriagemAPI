const validateCpf = (cpf) => {
    if (!cpf || (cpf && cpf.trim() === '')) {
        throw new Error('Please inform patient CPF');
    }
}

module.exports = validateCpf;