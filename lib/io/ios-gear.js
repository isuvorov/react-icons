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

var IoIosGear = function (_React$Component) {
    _inherits(IoIosGear, _React$Component);

    function IoIosGear() {
        _classCallCheck(this, IoIosGear);

        return _possibleConstructorReturn(this, (IoIosGear.__proto__ || Object.getPrototypeOf(IoIosGear)).apply(this, arguments));
    }

    _createClass(IoIosGear, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 20c0 1.6 1.1 3 2.5 3.6-0.4 1.6-1 3.1-1.9 4.4-0.4-0.2-1-0.3-1.5-0.3-1.1 0-2 0.3-2.8 1.1-1.1 1.2-1.4 2.9-0.8 4.3-1.3 0.9-2.8 1.5-4.4 1.9-0.6-1.4-2-2.5-3.6-2.5s-3 1.1-3.6 2.5c-1.6-0.4-3.1-1-4.4-1.9 0.6-1.4 0.3-3.1-0.8-4.3-0.8-0.8-1.7-1.1-2.8-1.1-0.5 0-1.1 0.1-1.5 0.3-0.9-1.3-1.5-2.8-1.9-4.4 1.4-0.6 2.5-2 2.5-3.6s-1-3-2.5-3.6c0.4-1.6 1-3.1 1.9-4.4 0.4 0.2 1 0.3 1.5 0.3 1.1 0 2-0.3 2.8-1.1 1.1-1.2 1.4-2.9 0.8-4.3 1.3-0.9 2.8-1.5 4.4-1.9 0.6 1.5 2 2.5 3.6 2.5s3-1 3.6-2.5c1.6 0.4 3.1 1 4.4 1.9-0.6 1.4-0.3 3.1 0.8 4.3 0.8 0.8 1.7 1.1 2.8 1.1 0.5 0 1.1-0.1 1.5-0.3 0.9 1.3 1.5 2.8 1.9 4.4-1.5 0.6-2.5 2-2.5 3.6z m-12.4 6.3c3.4 0 6.2-2.9 6.2-6.3s-2.8-6.2-6.2-6.2-6.3 2.8-6.3 6.2 2.8 6.3 6.3 6.3z' })
                )
            );
        }
    }]);

    return IoIosGear;
}(React.Component);

exports.default = IoIosGear;
module.exports = exports['default'];