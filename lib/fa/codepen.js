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

var FaCodepen = function (_React$Component) {
    _inherits(FaCodepen, _React$Component);

    function FaCodepen() {
        _classCallCheck(this, FaCodepen);

        return _possibleConstructorReturn(this, (FaCodepen.__proto__ || Object.getPrototypeOf(FaCodepen)).apply(this, arguments));
    }

    _createClass(FaCodepen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.8 26.1l13.5 9v-8l-7.5-5z m-1.4-3.2l4.3-2.9-4.3-2.9v5.8z m18.3 12.2l13.5-9-6-4-7.5 5v8z m-1.7-11l6.1-4.1-6.1-4.1-6.1 4.1z m-9.2-6.2l7.5-5v-8l-13.5 9z m21.5 2.1l4.3 2.9v-5.8z m-3.1-2.1l6-4-13.5-9v8z m10.8-4v12.2q0 0.9-0.8 1.4l-18.2 12.2q-0.5 0.3-1 0.3t-1-0.3l-18.2-12.2q-0.8-0.5-0.8-1.4v-12.2q0-0.9 0.8-1.4l18.2-12.2q0.5-0.3 1-0.3t1 0.3l18.2 12.2q0.8 0.5 0.8 1.4z' })
                )
            );
        }
    }]);

    return FaCodepen;
}(React.Component);

exports.default = FaCodepen;
module.exports = exports['default'];