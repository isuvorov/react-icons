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

var IoIosGlassesOutline = function (_React$Component) {
    _inherits(IoIosGlassesOutline, _React$Component);

    function IoIosGlassesOutline() {
        _classCallCheck(this, IoIosGlassesOutline);

        return _possibleConstructorReturn(this, (IoIosGlassesOutline.__proto__ || Object.getPrototypeOf(IoIosGlassesOutline)).apply(this, arguments));
    }

    _createClass(IoIosGlassesOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.8 19.3h1.2v1.4h-1.2c-0.1 1.7-1 3.4-2.2 4.5-1.4 1.3-3.1 2-4.9 2-4 0-7.2-3.2-7.2-7.2 0-0.8-0.9-1.7-2-1.7s-2 0.9-2 1.7c0 4-3.2 7.2-7.2 7.2-1.8 0-3.5-0.7-4.9-2-1.2-1.1-2.1-2.8-2.2-4.5h-1.2v-1.4h1.2c0.1-1.7 1-3.4 2.2-4.6 1.4-1.3 3.1-1.9 4.9-1.9 3.3 0 6.1 2.1 6.9 5.2 0.6-0.5 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9c0.8-3.1 3.6-5.2 6.9-5.2 1.8 0 3.5 0.7 4.9 2 1.2 1.1 2.1 2.8 2.2 4.5z m-7.1 6.7c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z m-18.4 0c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z' })
                )
            );
        }
    }]);

    return IoIosGlassesOutline;
}(React.Component);

exports.default = IoIosGlassesOutline;
module.exports = exports['default'];