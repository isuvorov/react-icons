'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiPhoneBluetooth = function (_React$Component) {
    _inherits(MdiPhoneBluetooth, _React$Component);

    function MdiPhoneBluetooth() {
        _classCallCheck(this, MdiPhoneBluetooth);

        return _possibleConstructorReturn(this, (MdiPhoneBluetooth.__proto__ || Object.getPrototypeOf(MdiPhoneBluetooth)).apply(this, arguments));
    }

    _createClass(MdiPhoneBluetooth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,15.4981C 18.7524,15.4981 17.5524,15.2971 16.4274,14.9301C 16.0814,14.8181 15.6864,14.9001 15.4114,15.1751L 13.2114,17.3781C 10.3784,15.9371 8.06339,13.6241 6.62238,10.7931L 8.82239,8.58506C 9.09738,8.31107 9.17938,7.91607 9.06638,7.57007C 8.6994,6.44607 8.49939,5.24507 8.49939,3.99807C 8.49939,3.44507 8.0524,2.99807 7.49939,2.99807L 3.99939,2.99807C 3.44638,2.99807 2.99939,3.44507 2.99939,3.99807C 2.99939,13.3867 10.6104,20.9981 19.9994,20.9981C 20.5524,20.9981 20.9994,20.5511 20.9994,19.9981L 20.9994,16.4981C 20.9994,15.9451 20.5524,15.4981 19.9994,15.4981 Z M 17.9994,7.20507L 18.9384,8.14407L 17.9994,9.08407M 17.9994,2.91207L 18.9384,3.85206L 17.9994,4.79107M 14.7064,9.49807L 16.9994,7.20507L 16.9994,10.9981L 17.4994,10.9981L 20.3524,8.14407L 18.2064,5.99807L 20.3524,3.85206L 17.4994,0.998068L 16.9994,0.998068L 16.9994,4.79107L 14.7064,2.49807L 13.9994,3.20507L 16.7924,5.99807L 13.9994,8.79107L 14.7064,9.49807 Z ' })
                )
            );
        }
    }]);

    return MdiPhoneBluetooth;
}(React.Component);

exports.default = MdiPhoneBluetooth;
module.exports = exports['default'];