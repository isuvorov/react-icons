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

var IoIosThunderstormOutline = function (_React$Component) {
    _inherits(IoIosThunderstormOutline, _React$Component);

    function IoIosThunderstormOutline() {
        _classCallCheck(this, IoIosThunderstormOutline);

        return _possibleConstructorReturn(this, (IoIosThunderstormOutline.__proto__ || Object.getPrototypeOf(IoIosThunderstormOutline)).apply(this, arguments));
    }

    _createClass(IoIosThunderstormOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.6 21.3l-6.9 10 2.3-7.5h-4.1l1.2-6.3h5.6l-1.2 3.8h3.1z m1.2-7.8c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.2-5.1 5.2h-0.6v-1.4h0.6c2.1 0 3.9-1.7 3.9-3.8s-1.8-3.9-3.9-3.9h-0.4l-1.1 0.1-0.3-1c-0.2-1.1-0.8-2.1-1.7-2.8s-1.9-1-3-1c-2.7 0-5 2.1-5 4.8v1l0.1 0.7c-0.4 0-0.9 0.1-1.1 0.1-1.5 0.3-2.5 1.4-2.5 2.9 0 0.8 0.2 1.5 0.7 2.1s1.3 0.8 2.1 0.8h0.8v1.4h-0.8c-2.2 0-4.1-1.9-4.1-4.2 0-2.1 1.6-4 3.7-4.1v-0.7c0-3.3 2.7-6.1 6.1-6.1 2.9 0 5.3 2.1 5.9 4.8h0.6z' })
                )
            );
        }
    }]);

    return IoIosThunderstormOutline;
}(React.Component);

exports.default = IoIosThunderstormOutline;
module.exports = exports['default'];