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

var IoIosPartlysunny = function (_React$Component) {
    _inherits(IoIosPartlysunny, _React$Component);

    function IoIosPartlysunny() {
        _classCallCheck(this, IoIosPartlysunny);

        return _possibleConstructorReturn(this, (IoIosPartlysunny.__proto__ || Object.getPrototypeOf(IoIosPartlysunny)).apply(this, arguments));
    }

    _createClass(IoIosPartlysunny, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.3 11.7v-4.2h1.2v4.2h-1.2z m-11.3 8.3v-1.2h4.3v1.2h-4.3z m3.4-8.4l0.8-0.8 2.5 2.5-0.8 0.8z m14 2.5l-0.8-0.9 2.5-2.5 0.8 0.9z m-13 13.4l-0.8-0.9 2.4-2.4 0.9 0.9z m14-10c2.8 0 5.3 2 5.9 4.8h0.6c2.8 0 5.1 2.2 5.1 5s-2.3 5.2-5.1 5.2h-12.2c-2.2 0-4.1-1.9-4.1-4.1 0-2.1 1.6-4 3.7-4.2v-0.6c0-3.4 2.7-6.1 6.1-6.1z m-2.7-2.2l0.1 0.2c-2.4 0.4-4.9 3.3-4.9 5.8 0 0.2 0.1 0.4 0.1 0.6l-0.1 0.1h0c-0.9 0.4-1.4 1-1.8 2-1.8-1-3-2.8-3-4.9 0-3.1 2.5-5.6 5.5-5.6 1.7 0 3.1 0.7 4.1 1.8z' })
                )
            );
        }
    }]);

    return IoIosPartlysunny;
}(React.Component);

exports.default = IoIosPartlysunny;
module.exports = exports['default'];