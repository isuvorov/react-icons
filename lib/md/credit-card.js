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

var MdCreditCard = function (_React$Component) {
    _inherits(MdCreditCard, _React$Component);

    function MdCreditCard() {
        _classCallCheck(this, MdCreditCard);

        return _possibleConstructorReturn(this, (MdCreditCard.__proto__ || Object.getPrototypeOf(MdCreditCard)).apply(this, arguments));
    }

    _createClass(MdCreditCard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 13.4v-3.4h-26.8v3.4h26.8z m0 16.6v-10h-26.8v10h26.8z m0-23.4q1.4 0 2.3 1t0.9 2.4v20q0 1.4-0.9 2.4t-2.3 1h-26.8q-1.4 0-2.3-1t-0.9-2.4v-20q0-1.4 0.9-2.4t2.3-1h26.8z' })
                )
            );
        }
    }]);

    return MdCreditCard;
}(React.Component);

exports.default = MdCreditCard;
module.exports = exports['default'];