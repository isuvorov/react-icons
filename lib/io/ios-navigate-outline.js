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

var IoIosNavigateOutline = function (_React$Component) {
    _inherits(IoIosNavigateOutline, _React$Component);

    function IoIosNavigateOutline() {
        _classCallCheck(this, IoIosNavigateOutline);

        return _possibleConstructorReturn(this, (IoIosNavigateOutline.__proto__ || Object.getPrototypeOf(IoIosNavigateOutline)).apply(this, arguments));
    }

    _createClass(IoIosNavigateOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 5c-4 0-7.8 1.6-10.6 4.5s-4.4 6.5-4.4 10.5 1.6 7.7 4.4 10.5 6.6 4.5 10.6 4.5 7.7-1.6 10.5-4.5 4.5-6.5 4.5-10.5-1.7-7.7-4.5-10.5-6.6-4.5-10.5-4.5z m0-1.2c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m7.5 8.7l-7.5 17.5v-10h-10z' })
                )
            );
        }
    }]);

    return IoIosNavigateOutline;
}(React.Component);

exports.default = IoIosNavigateOutline;
module.exports = exports['default'];