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

var IoIosSunny = function (_React$Component) {
    _inherits(IoIosSunny, _React$Component);

    function IoIosSunny() {
        _classCallCheck(this, IoIosSunny);

        return _possibleConstructorReturn(this, (IoIosSunny.__proto__ || Object.getPrototypeOf(IoIosSunny)).apply(this, arguments));
    }

    _createClass(IoIosSunny, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.3 11.9v-4.4h1.4v4.4h-1.4z m0 20.6v-4.7h1.4v4.7h-1.4z m8.8-11.8v-1.4h4.4v1.4h-4.4z m-20.6 0v-1.4h4.7v1.4h-4.7z m18.8 4.1l2.6 2.7-0.9 0.9-2.6-2.6z m-13.8-13.7l2.7 2.6-1 0.9-2.6-2.6z m12.9 2.7l2.6-2.7 0.9 0.9-2.6 2.6z m-13.8 13.7l2.6-2.7 0.9 1-2.6 2.6z m8.4-1.6c-3.3 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9 5.9 2.6 5.9 5.9-2.6 5.9-5.9 5.9z' })
                )
            );
        }
    }]);

    return IoIosSunny;
}(React.Component);

exports.default = IoIosSunny;
module.exports = exports['default'];