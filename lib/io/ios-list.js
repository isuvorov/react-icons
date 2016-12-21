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

var IoIosList = function (_React$Component) {
    _inherits(IoIosList, _React$Component);

    function IoIosList() {
        _classCallCheck(this, IoIosList);

        return _possibleConstructorReturn(this, (IoIosList.__proto__ || Object.getPrototypeOf(IoIosList)).apply(this, arguments));
    }

    _createClass(IoIosList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 5h30v30h-30v-30z m6.3 23.8c0.7 0 1.2-0.6 1.2-1.3s-0.5-1.2-1.2-1.2-1.3 0.5-1.3 1.2 0.5 1.3 1.3 1.3z m0-7.5c0.7 0 1.2-0.6 1.2-1.3s-0.5-1.2-1.2-1.2-1.3 0.5-1.3 1.2 0.5 1.3 1.3 1.3z m0-7.5c0.7 0 1.2-0.6 1.2-1.3s-0.5-1.2-1.2-1.2-1.3 0.5-1.3 1.2 0.5 1.3 1.3 1.3z m18.7 14.3v-1.2h-15v1.2h15z m0-7.5v-1.2h-15v1.2h15z m0-7.5v-1.2h-15v1.2h15z' })
                )
            );
        }
    }]);

    return IoIosList;
}(React.Component);

exports.default = IoIosList;
module.exports = exports['default'];