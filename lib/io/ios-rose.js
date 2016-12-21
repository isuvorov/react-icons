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

var IoIosRose = function (_React$Component) {
    _inherits(IoIosRose, _React$Component);

    function IoIosRose() {
        _classCallCheck(this, IoIosRose);

        return _possibleConstructorReturn(this, (IoIosRose.__proto__ || Object.getPrototypeOf(IoIosRose)).apply(this, arguments));
    }

    _createClass(IoIosRose, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 10c-6 7.5-1.2 11.8-1.2 17.5s-4.4 10-11.3 10-11.2-4.3-11.2-10 2.7-8.5 7.2-11.1c2-1.1 2.6-1.5 4.1-2.2 2.3-1.1 5.1-2.2 8.2-3.1 1.3-0.4 2.7-0.8 4.2-1.1z m-25-2.5s5.2 1.2 9 3.4c1.2 0.6 2.2 1.4 2.9 2.2-1 0.5-1.9 1-2.8 1.5-0.6 0.3-1.1 0.6-1.6 0.9-2 1.3-3.4 2.5-4.5 3.3 0.4-3.2 0.2-7.6-3-11.3z m20-2.5s2 2.5 2.5 4.3c-2.6 0.6-6.6 2-9.5 3.3l-0.2-0.3c-0.7-0.8-1.7-1.7-3-2.5 4-4.6 10.2-4.8 10.2-4.8z m-13.7-2.5s2.7 1.3 5 4.4c-1 0.7-1.8 1.5-2.6 2.4-2.1-1-3.2-1.6-4.8-2.1 0.4-1.2 1.2-3 2.4-4.7z' })
                )
            );
        }
    }]);

    return IoIosRose;
}(React.Component);

exports.default = IoIosRose;
module.exports = exports['default'];