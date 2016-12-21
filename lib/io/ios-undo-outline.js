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

var IoIosUndoOutline = function (_React$Component) {
    _inherits(IoIosUndoOutline, _React$Component);

    function IoIosUndoOutline() {
        _classCallCheck(this, IoIosUndoOutline);

        return _possibleConstructorReturn(this, (IoIosUndoOutline.__proto__ || Object.getPrototypeOf(IoIosUndoOutline)).apply(this, arguments));
    }

    _createClass(IoIosUndoOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 28.8v2.5h-0.8l-1.5-2.5c-1.6-2.5-3.5-4.9-5.9-6-1.9-0.8-3.7-1.5-6.8-1.6v6.3l-15-10 15-10v6.2c4.9 0.3 8.4 1.7 11.2 4.4 4 4.2 3.8 9.3 3.8 10.7z m-1.2-0.6s0.7-13.2-15-13.2v-5.1l-11.6 7.6 11.6 7.6v-5.1c7.1 0 11.2 1.9 15 8.2z' })
                )
            );
        }
    }]);

    return IoIosUndoOutline;
}(React.Component);

exports.default = IoIosUndoOutline;
module.exports = exports['default'];