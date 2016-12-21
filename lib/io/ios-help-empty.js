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

var IoIosHelpEmpty = function (_React$Component) {
    _inherits(IoIosHelpEmpty, _React$Component);

    function IoIosHelpEmpty() {
        _classCallCheck(this, IoIosHelpEmpty);

        return _possibleConstructorReturn(this, (IoIosHelpEmpty.__proto__ || Object.getPrototypeOf(IoIosHelpEmpty)).apply(this, arguments));
    }

    _createClass(IoIosHelpEmpty, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.3 28.6c-0.7 0-1.3-0.6-1.3-1.3s0.6-1.4 1.3-1.4 1.3 0.7 1.3 1.4-0.6 1.3-1.3 1.3z m2.7-9c-1.8 1.7-1.7 2.1-1.8 4.2h-1.5c0.1-2.2 0.5-3.4 2.3-5 0.9-0.8 1.5-1.9 1.5-3.1 0-1.9-1.5-3-3.3-3-2.5 0-3.8 1.2-3.7 3.6h-1.5c0-3.3 2-4.9 5.3-4.9 2.6 0 4.7 1.6 4.7 4.2 0 1.7-0.9 2.9-2 4z' })
                )
            );
        }
    }]);

    return IoIosHelpEmpty;
}(React.Component);

exports.default = IoIosHelpEmpty;
module.exports = exports['default'];