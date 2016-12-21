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

var IoIosFlagOutline = function (_React$Component) {
    _inherits(IoIosFlagOutline, _React$Component);

    function IoIosFlagOutline() {
        _classCallCheck(this, IoIosFlagOutline);

        return _possibleConstructorReturn(this, (IoIosFlagOutline.__proto__ || Object.getPrototypeOf(IoIosFlagOutline)).apply(this, arguments));
    }

    _createClass(IoIosFlagOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.8 8.8c0.4-0.1 0.8-0.1 1.2-0.2v13.5c-0.4 0.1-0.8 0.1-1.2 0.2-0.9 0-1.9 0.2-3.1 0.2-1.9 0-3.7-0.3-5.4-0.7s-3.3-1-5-1c-2.3 0-3.6 0.4-4.1 0.5v11.2h-1.2v-23.9l0.2-0.2c0.2-0.1 1.4-0.9 5.1-0.9 1.9 0 3.5 0.3 5.2 0.7 1.7 0.3 3.3 0.9 5.1 0.9 1.2 0 2.3-0.3 3.1-0.3z m0 12.2v-11c-0.9 0.1-2 0.3-3.2 0.3-1.9 0-3.6-0.5-5.3-0.8s-3.3-0.7-5-0.7c-2.3 0-3.6 0.3-4.1 0.5v10.7c0.8-0.2 2.1-0.5 4.1-0.5 1.9 0 3.5 0.7 5.2 1 1.7 0.4 3.4 0.8 5.2 0.8 1.2 0 2.2-0.2 3-0.3z' })
                )
            );
        }
    }]);

    return IoIosFlagOutline;
}(React.Component);

exports.default = IoIosFlagOutline;
module.exports = exports['default'];