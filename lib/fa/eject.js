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

var FaEject = function (_React$Component) {
    _inherits(FaEject, _React$Component);

    function FaEject() {
        _classCallCheck(this, FaEject);

        return _possibleConstructorReturn(this, (FaEject.__proto__ || Object.getPrototypeOf(FaEject)).apply(this, arguments));
    }

    _createClass(FaEject, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.3 21.9l15.9-15.9q0.4-0.4 1-0.4t1 0.4l15.8 15.9q0.4 0.4 0.3 0.7t-0.7 0.3h-32.9q-0.5 0-0.7-0.3t0.3-0.7z m32.6 12.4h-31.4q-0.6 0-1.1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1.1-0.4h31.4q0.6 0 1 0.4t0.4 1v5.8q0 0.5-0.4 1t-1 0.4z' })
                )
            );
        }
    }]);

    return FaEject;
}(React.Component);

exports.default = FaEject;
module.exports = exports['default'];