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

var FaRenren = function (_React$Component) {
    _inherits(FaRenren, _React$Component);

    function FaRenren() {
        _classCallCheck(this, FaRenren);

        return _possibleConstructorReturn(this, (FaRenren.__proto__ || Object.getPrototypeOf(FaRenren)).apply(this, arguments));
    }

    _createClass(FaRenren, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 35q-3.8 2.1-8.2 2.1-4.4 0-8.2-2.1 3.1-1.9 5.2-4.7t3-5.9q0.8 3.2 2.9 5.9t5.3 4.7z m-11.1-31.8v10.8q0 5.6-2.8 10.3t-7.4 6.8q-4-4.8-4-11.1 0-4.1 1.9-7.8t5.1-6 7.2-3z m20.1 16.8q0 6.3-4.1 11.1-4.5-2.2-7.3-6.8t-2.9-10.3v-10.8q4 0.6 7.3 3t5.1 6 1.9 7.8z' })
                )
            );
        }
    }]);

    return FaRenren;
}(React.Component);

exports.default = FaRenren;
module.exports = exports['default'];