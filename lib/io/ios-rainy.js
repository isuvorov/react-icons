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

var IoIosRainy = function (_React$Component) {
    _inherits(IoIosRainy, _React$Component);

    function IoIosRainy() {
        _classCallCheck(this, IoIosRainy);

        return _possibleConstructorReturn(this, (IoIosRainy.__proto__ || Object.getPrototypeOf(IoIosRainy)).apply(this, arguments));
    }

    _createClass(IoIosRainy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.7 14c3 0 5.3 2.6 5.3 5.5 0 2.3-1.5 4.4-3.5 5.2l-4.3 6.2c-0.2 0.2-0.4 0.4-0.6 0.4-0.4 0-0.7-0.3-0.7-0.7 0-0.1 0.1-0.3 0.2-0.4l3.6-5.2h-2.7l-2.5 3.4c-0.1 0.2-0.3 0.4-0.5 0.4-0.4 0-0.7-0.3-0.7-0.7 0-0.1 0.1-0.2 0.1-0.4l2-2.7h-2.9l-4.1 5.9c-0.2 0.2-0.4 0.4-0.6 0.4-0.4 0-0.7-0.3-0.7-0.7 0-0.1 0.2-0.3 0.2-0.4l3.6-5.2h-2.8l-2.5 3.4c-0.1 0.2-0.3 0.4-0.5 0.4-0.4 0-0.6-0.3-0.6-0.7 0-0.1 0-0.3 0.1-0.4l2-2.7c-2.3-0.2-4.1-2.1-4.1-4.4 0-2.2 1.7-4.5 3.9-4.7 0-0.2-0.1-0.3-0.1-0.6 0-3.6 2.5-6.5 6.4-6.5 3.6 0 5.7 2.4 6.4 5.3 0.2 0 0.4-0.1 0.6-0.1z' })
                )
            );
        }
    }]);

    return IoIosRainy;
}(React.Component);

exports.default = IoIosRainy;
module.exports = exports['default'];