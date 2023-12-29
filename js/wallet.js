$(document).ready(function() {

    const okxWalletButton = $('#okx');
    const okxSpan = $('#okxSpan');
    const okxModal = new bootstrap.Modal('#okxModal');

    if (typeof window.okxwallet !== 'undefined') {
        okxWalletButton.click(function() {
            okxwallet
                .request({
                    method: "eth_requestAccounts"
                })
                .then((res) => {
                    okxSpan.html("OKX Wallet Connected");
                    okxModal.show();
                })
                .catch((err) => {
                    if (err.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                        console.log("Please connect to OKX Wallet.");
                    } else {
                        console.error(err);
                    }
                });
        });
    }

});