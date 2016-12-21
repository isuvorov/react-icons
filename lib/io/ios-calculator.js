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

var IoIosCalculator = function (_React$Component) {
    _inherits(IoIosCalculator, _React$Component);

    function IoIosCalculator() {
        _classCallCheck(this, IoIosCalculator);

        return _possibleConstructorReturn(this, (IoIosCalculator.__proto__ || Object.getPrototypeOf(IoIosCalculator)).apply(this, arguments));
    }

    _createClass(IoIosCalculator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.5 5c1.4 0 2.5 1.1 2.5 2.5v25c0 1.4-1.1 2.5-2.5 2.5h-17.5c-1.4 0-2.5-1.1-2.5-2.5v-25c0-1.4 1.1-2.5 2.5-2.5h17.5z m-0.6 16.9h-3.8v10h3.8v-10z m0-6.3h-3.8v3.8h3.8v-3.8z m-6.3 12.5h-3.7v3.8h3.7v-3.8z m0-6.2h-3.7v3.7h3.7v-3.7z m0-6.3h-3.7v3.8h3.7v-3.8z m-6.2 12.5h-3.8v3.8h3.8v-3.8z m0-6.2h-3.8v3.7h3.8v-3.7z m0-6.3h-3.8v3.8h3.8v-3.8z m-3.8-3.7h16.3v-3.8h-16.3v3.8z' })
                )
            );
        }
    }]);

    return IoIosCalculator;
}(React.Component);

exports.default = IoIosCalculator;
module.exports = exports['default'];