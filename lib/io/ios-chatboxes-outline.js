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

var IoIosChatboxesOutline = function (_React$Component) {
    _inherits(IoIosChatboxesOutline, _React$Component);

    function IoIosChatboxesOutline() {
        _classCallCheck(this, IoIosChatboxesOutline);

        return _possibleConstructorReturn(this, (IoIosChatboxesOutline.__proto__ || Object.getPrototypeOf(IoIosChatboxesOutline)).apply(this, arguments));
    }

    _createClass(IoIosChatboxesOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.8 5v15h7.5v1.3h-8.8v-17.5h22.5v8.7h-1.2v-7.5h-20z m8.7 8.8h22.5v17.5h-3.7v5h-1.1l-5-5h-12.7v-17.5z m21.3 16.2v-15h-20v15h11.9l4.3 4.3v-4.3h3.8z' })
                )
            );
        }
    }]);

    return IoIosChatboxesOutline;
}(React.Component);

exports.default = IoIosChatboxesOutline;
module.exports = exports['default'];