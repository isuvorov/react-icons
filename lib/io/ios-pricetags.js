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

var IoIosPricetags = function (_React$Component) {
    _inherits(IoIosPricetags, _React$Component);

    function IoIosPricetags() {
        _classCallCheck(this, IoIosPricetags);

        return _possibleConstructorReturn(this, (IoIosPricetags.__proto__ || Object.getPrototypeOf(IoIosPricetags)).apply(this, arguments));
    }

    _createClass(IoIosPricetags, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.8 5h1.2v11.3l-18.7 21.2-1.1-1 18.6-20.8v-10.7z m-13.8-2.5h12.5v12.5l-17.3 19.8-0.9 0.8-1.8 1.9-12.5-12.5z m5 10c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-1.2-2.5c0-0.9 0.3-1.2 1.2-1.2s1.3 0.3 1.3 1.2-0.4 1.3-1.3 1.3-1.2-0.4-1.2-1.3z' })
                )
            );
        }
    }]);

    return IoIosPricetags;
}(React.Component);

exports.default = IoIosPricetags;
module.exports = exports['default'];