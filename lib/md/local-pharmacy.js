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

var MdLocalPharmacy = function (_React$Component) {
    _inherits(MdLocalPharmacy, _React$Component);

    function MdLocalPharmacy() {
        _classCallCheck(this, MdLocalPharmacy);

        return _possibleConstructorReturn(this, (MdLocalPharmacy.__proto__ || Object.getPrototypeOf(MdLocalPharmacy)).apply(this, arguments));
    }

    _createClass(MdLocalPharmacy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 23.4v-3.4h-5v-5h-3.2v5h-5v3.4h5v5h3.2v-5h5z m8.4-15v3.2l-3.4 10 3.4 10v3.4h-30v-3.4l3.4-10-3.4-10v-3.2h21.2l2.4-6.8 3.9 1.5-1.9 5.3h4.4z' })
                )
            );
        }
    }]);

    return MdLocalPharmacy;
}(React.Component);

exports.default = MdLocalPharmacy;
module.exports = exports['default'];