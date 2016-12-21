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

var IoIosBookOutline = function (_React$Component) {
    _inherits(IoIosBookOutline, _React$Component);

    function IoIosBookOutline() {
        _classCallCheck(this, IoIosBookOutline);

        return _possibleConstructorReturn(this, (IoIosBookOutline.__proto__ || Object.getPrototypeOf(IoIosBookOutline)).apply(this, arguments));
    }

    _createClass(IoIosBookOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.2 5c4.3 0 7.8 2 7.8 6.2v22.1h-1.7c-1.3-2.4-3.5-3.3-6.1-3.3-3.1 0-5.8 2.2-6.4 5h-1.6c-0.6-2.8-3.3-5-6.4-5-2.6 0-5.1 1.3-6.1 3.3h-1.7v-22.1c0-4.2 3.5-6.2 7.8-6.2 3.2 0 6.1 1.1 7.2 3.4 0.9-2.3 4-3.4 7.2-3.4z m-7.8 27.1v-21c-0.1-3.4-3.1-4.9-6.6-4.9-3.4 0-6.3 1.5-6.6 4.8v20.6h0.1c1.5-2.1 3.8-2.9 6.5-2.9s5.2 1.4 6.6 3.4z m14.4-20.5v-1.2c-0.3-3.3-3.2-4.1-6.6-4.1-3.6 0-6.6 1.5-6.6 5v20.8c1.4-2 3.9-3.3 6.6-3.3s5.1 0.7 6.6 2.8v-20z' })
                )
            );
        }
    }]);

    return IoIosBookOutline;
}(React.Component);

exports.default = IoIosBookOutline;
module.exports = exports['default'];