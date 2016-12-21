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

var MdFiberPin = function (_React$Component) {
    _inherits(MdFiberPin, _React$Component);

    function MdFiberPin() {
        _classCallCheck(this, MdFiberPin);

        return _possibleConstructorReturn(this, (MdFiberPin.__proto__ || Object.getPrototypeOf(MdFiberPin)).apply(this, arguments));
    }

    _createClass(MdFiberPin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 25v-10h-2.1v5.9l-4.2-5.9h-2.1v10h2.1v-5.9l4.2 5.9h2.1z m-12.5 0v-10h-2.5v10h2.5z m-5.9-5.9v-1.6c0-1.4-1.1-2.5-2.5-2.5h-5.9v10h2.5v-3.4h3.4c1.4 0 2.5-1.1 2.5-2.5z m18.4-12.5c1.8 0 3.2 1.5 3.2 3.4v20c0 1.9-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.5-3.2-3.4v-20c0-1.9 1.4-3.4 3.2-3.4h26.8z m-24.3 10.9h3.4v1.6h-3.4v-1.6z' })
                )
            );
        }
    }]);

    return MdFiberPin;
}(React.Component);

exports.default = MdFiberPin;
module.exports = exports['default'];