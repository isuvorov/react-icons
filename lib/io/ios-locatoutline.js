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

var IoIosLocatoutline = function (_React$Component) {
    _inherits(IoIosLocatoutline, _React$Component);

    function IoIosLocatoutline() {
        _classCallCheck(this, IoIosLocatoutline);

        return _possibleConstructorReturn(this, (IoIosLocatoutline.__proto__ || Object.getPrototypeOf(IoIosLocatoutline)).apply(this, arguments));
    }

    _createClass(IoIosLocatoutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c-2.7 0-5.3 1-7.2 2.8s-2.8 4.5-2.8 7.2c0 3.3 1.8 8.3 5.4 14.5 1.7 3 3.5 5.6 4.6 7.1 1-1.5 2.8-4.1 4.5-7.1 3.6-6.2 5.5-11.2 5.5-14.5 0-2.7-1.1-5.3-2.9-7.2s-4.5-2.8-7.1-2.8z m0-1.3c6.2 0 11.2 5 11.2 11.3 0 8.7-11.2 23.7-11.2 23.7s-11.3-15-11.3-23.7c0-6.3 5-11.3 11.3-11.3z m0 6.3c2.7 0 5 2.2 5 5s-2.3 5-5 5-5-2.3-5-5 2.2-5 5-5z m0 8.6c2 0 3.6-1.6 3.6-3.6s-1.6-3.7-3.6-3.7-3.7 1.6-3.7 3.7 1.6 3.6 3.7 3.6z' })
                )
            );
        }
    }]);

    return IoIosLocatoutline;
}(React.Component);

exports.default = IoIosLocatoutline;
module.exports = exports['default'];