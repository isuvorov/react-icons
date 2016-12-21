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

var MdPhoneForwarded = function (_React$Component) {
    _inherits(MdPhoneForwarded, _React$Component);

    function MdPhoneForwarded() {
        _classCallCheck(this, MdPhoneForwarded);

        return _possibleConstructorReturn(this, (MdPhoneForwarded.__proto__ || Object.getPrototypeOf(MdPhoneForwarded)).apply(this, arguments));
    }

    _createClass(MdPhoneForwarded, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 25.9c0.9 0 1.6 0.7 1.6 1.6v5.9c0 0.9-0.7 1.6-1.6 1.6-15.7 0-28.4-12.7-28.4-28.4 0-0.9 0.7-1.6 1.6-1.6h5.9c0.9 0 1.6 0.7 1.6 1.6 0 2.2 0.4 4.1 1 6 0.1 0.5 0.1 1.2-0.4 1.7l-3.7 3.7c2.4 4.7 6.3 8.6 11 11l3.7-3.7c0.5-0.5 1.2-0.5 1.7-0.4 1.9 0.7 3.9 1 6 1z m-3.4-7.5v-5h-6.6v-6.8h6.6v-5l8.4 8.4z' })
                )
            );
        }
    }]);

    return MdPhoneForwarded;
}(React.Component);

exports.default = MdPhoneForwarded;
module.exports = exports['default'];